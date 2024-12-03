module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3006),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1c01cdebe81deff77e57616bd6e94f46'),
    },
  },
});
