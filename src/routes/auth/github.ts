import { Router } from 'express'
import passport from 'passport'
import { successRedirect, failureRedirect } from '../auth/settings'
import GitHubStrategy from 'passport-github2'

const router = Router()

passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: 'auth/github/callback',
		},
		function (accessToken, refreshToken, profile, done) {},
	),
)

router.get('/github', (req, res) => {
	passport.authenticate('github', { scope: ['user:email'] })
})

router.get('/github/callback', passport.authenticate('github', { failureRedirect }), function (req, res) {
	// Successful authentication, redirect home.
	res.redirect(successRedirect)
})

export default router
