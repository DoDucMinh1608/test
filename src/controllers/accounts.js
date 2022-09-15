import { Router } from 'express'
import Account from '../database/account.js'

const router = Router()

router.route('/').get((req, res) => {
  res.render('pages/accounts/index')
})

router.route('/login').post(async (req, res) => {
  const data = req.body
  try {
    const newAccount = new Account({ name: data.username, password: data.passwords })
    await newAccount.save({})
  } catch (error) {

  }
})
export default router