// access control functions

export function isSignedIn({ session }) {
  return !!session;
}

export const permissions = {
  canManageProducts({ session }) {
    return session?.data.role?.canManageProducts;
  },
  canSeeOtherUsers({ session }) {
    return session?.data.role?.canSeeOtherUsers;
  },
  canManageUsers({ session }) {
    return session?.data.role?.canManageUsers;
  },
  canManageRoles({ session }) {
    return session?.data.role?.canManageRoles;
  },
  canManageCart({ session }) {
    return session?.data.role?.canManageCart;
  },
  canManageOrders({ session }) {
    return session?.data.role?.canManageOrders;
  },
};
