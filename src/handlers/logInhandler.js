/* 
const {OAuth2Client} = require('google-auth-library');

const client = new OAuth2Client(
  '1079534702185-qirmnmicl80u1aja37raj45neoi4v4pr.apps.googleusercontent.com',
  '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'
);
app.get('/login', (req, res) => {
  const url = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.email']
  });
  res.redirect(url);
});
app.get('/oauth2callback', async (req, res) => {
  const {tokens} = await client.getToken(req.query.code);
  client.setCredentials(tokens);
  // Aquí puedes guardar las credenciales en una base de datos o usarlas para realizar una acción en nombre del usuario.
  res.send('Login exitoso!');
});
const {google} = require('googleapis');

const oauth2 = google.oauth2({
  auth: client,
  version: 'v2'
});

const userInfo = await oauth2.userinfo.get();
const email = userInfo.data.email;


 
 */const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '1079534702185-qirmnmicl80u1aja37raj45neoi4v4pr.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = '<YOUR_REDIRECT_URI>';

passport.use(new GoogleStrategy({
    clientID: "238700749237-co3sqjpkbpcsj9elfkv5ms61j7ta4rgs.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:9000/auth/google/callback"
},
(accessToken, refreshToken, profile, cb) => {
    // Aquí puedes procesar la información del usuario y guardarla en tu base de datos, si es necesario.
    return cb(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
