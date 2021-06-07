export default function (context) {
  if (!context.store.getters['authentication/isAuthenticated']) {
    context.redirect('/admin/auth')
  }
}