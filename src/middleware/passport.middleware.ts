
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';

import User from '../models/User.model';

import environment from '../environment';

const secretOrKey = environment.jwtSecreteKey;
const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

async function loginCallback(username: string, password: string, done: any) {
  try {
    const user = await User.authenticate(username, password);

    if (!user) return done(null, false, { message: 'Username or password was incorrect' });

    return done(null, user, { message: 'Logged in Successfully' });
  } catch (error) {
    return done(error);
  }
}

async function checkAuthentication(token: any, done: any) {
  try {
    return done(null, token.user);
  } catch (error) {
    done(error);
  }
}

async function checkSystem(token: any, done: any) {
  try {
    if (token.user.role !== 'system') throw new Error('Non-system users are unauthorized');

    return done(null, token.user);
  } catch (error) {
    done(error);
  }
}

const login = new LocalStrategy({ usernameField: 'username', passwordField: 'password' }, loginCallback);

const jwt = new JWTstrategy({ secretOrKey, jwtFromRequest }, checkAuthentication);
const system = new JWTstrategy({ secretOrKey, jwtFromRequest }, checkSystem);

passport.use('login', login);
passport.use('system', system);

// Default check if user has auth
passport.use(jwt);

export const userAuth = passport.authenticate('jwt', { session: false });
export const systemAuth = passport.authenticate('system', { session: false });
