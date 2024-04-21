import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import "dotenv/config";
import Customer from "../model/customer";

const setupPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.OAUTH_CLIENT_ID as string,
        clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
        sessionKey: "session-key-2024",
        callbackURL:
          "https://cinema-app-backend-iota.vercel.app/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const foundUser = await Customer.findOne({ googleId: profile.id });

        if (!foundUser) {
          const newUser = await Customer.create({
            googleId: profile.id,
            name: profile.name?.familyName,
            fullname: profile.displayName,
            email: profile._json.email,
            password: "123456",
            avatarUrl: profile._json.picture,
          });
          return done(null, newUser);
        } else {
          done(null, foundUser);
        }
      }
    )
  );

  passport.deserializeUser(async (id: any, done) => {
    console.log("Deserializing user...");
    const user = await Customer.findById(id).lean();
    done(null, user);
  });

  passport.serializeUser((user: any, done) => {
    console.log(`Serializing ${user.fullname}`);
    done(null, user);
  });
};

export default setupPassport;
