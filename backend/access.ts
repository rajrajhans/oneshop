// access control functions

export function isSignedIn({ session }) {
  return !!session;
}

// permissions are to check whether a user meets a certain criteria (returns true or false)
export const permissions = {
  canManageProducts({ session }) {
    return !!session?.data.role?.canManageProducts;
  },
  canSeeOtherUsers({ session }) {
    return !!session?.data.role?.canSeeOtherUsers;
  },
  canManageUsers({ session }) {
    return !!session?.data.role?.canManageUsers;
  },
  canManageRoles({ session }) {
    return !!session?.data.role?.canManageRoles;
  },
  canManageCart({ session }) {
    return !!session?.data.role?.canManageCart;
  },
  canManageOrders({ session }) {
    return !!session?.data.role?.canManageOrders;
  },
};

// rules can return either a boolean or a filter which limits the products they can operate on
export const rules = {
  canManageProduct({ session }) {
    // a user can manage a product if -
    //  - he has permission to manage any product (like an admin) OR
    //  - he is the creator of that particular product

    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageProducts(session)) {
      return true;
    }

    return { user: { id: session.itemId } }; // returns a "where" filter
  },
  canReadProducts({ session }) {
    // a user can read a product if -
    //  - he has permission to manage any product (like an admin) OR
    //  - the product is available
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageProducts(session)) {
      return true;
    }

    return { status: 'AVAILABLE' };
  },
  canOrder({ session }) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageCart(session)) {
      return true;
    }

    return { user: { id: session.itemId } }; // returns a "where" filter
  },
  canManageOrderItems({ session }) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageCart(session)) {
      return true;
    }

    return {
      order: {
        user: {
          id: session.itemId,
        },
      },
    }; // returns a "where" filter
  },
  canManageUsers({ session }) {
    if (!isSignedIn({ session })) {
      return false;
    }

    if (permissions.canManageUsers(session)) {
      return true;
    }

    return { id: session.itemId }; // returns a "where" filter
  },
};
