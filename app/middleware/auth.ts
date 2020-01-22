import passport from "passport"
import { Strategy as BearerStrategy } from "passport-http-bearer"
import * as authService from "../services/authService"

/* Checks if auth token maps to a user */
passport.use(
  "user_token_authenticator",
  new BearerStrategy(function(token, done) {
    let user = { msg: "todo: find user by session token" }
    return done(null, user, { message: "test", scope: "all" })

    /* TODO : Implement the logic below */
    //   UserModel.findOne({ token: token }, function (err, user) {
    //     if (err) { return done(err); }
    //     if (!user) { return done(null, false); }
    //     return done(null, user, { scope: 'all' });
    //   });
  })
)
