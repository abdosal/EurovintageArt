import 'dotenv/config'
import express from 'express'
import Stripe from 'stripe'
import cors from 'cors'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const app = express()

app.use(cors({ origin: 'http://localhost:5175' }))
app.use(express.json())

app.post('/create-checkout-session', async (req, res) => {
  const { cartItems } = req.body

  try {
    const line_items = cartItems.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: item.shortDesc || '',
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:5175/success',
      cancel_url:  'http://localhost:5175/cart',
    })

    res.json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error.message)
    res.status(500).json({ error: error.message })
  }
})

app.listen(4242, () => {
  console.log('✅ Serveur Stripe sur http://localhost:4242')
})