import passport from "passport"
import { Strategy as BearerStrategy } from "passport-http-bearer"

/* Checks if auth token maps to a user */
passport.use(
  "user_token_authenticator",
  new BearerStrategy(function(token, done) {
    let user = { msg: "hello mars -> again" }
    return done(null, user, { message: "test", scope: "all" })

    /* TODO : Implement the logic below */

    //   UserModel.findOne({ token: token }, function (err, user) {
    //     if (err) { return done(err); }
    //     if (!user) { return done(null, false); }
    //     return done(null, user, { scope: 'all' });
    //   });
  })
)
