export default function(nuxtContext) {
  const { req, error } = nuxtContext
  if (process.client) return
  // here we catch the error send by the server
  if (!req.serverError) return
  // calling the error function will render the error layout
  error({
    statusCode: req.error.statusCode || 500,
    message: req.error.message || `a fatal error as occurred`,
  })
}
