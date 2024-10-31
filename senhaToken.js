

const jwt = require('jsonwebtoken');
const router = express.Router();
const Exemplo = require('../models/Exemplo');


const SECRET_KEY = 'minhachavesecreta';


function gerarToken(user) {
  return jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
}


function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); 

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}


router.post('/login', (req, res) => {
  const { username, password } = req.body;


  if (username === 'user' && password === 'password') {
    const token = gerarToken({ username });
    return res.json({ token });
  }

  return res.status(401).json({ error: 'Credenciais inválidas' });
});


router.post('/exemplo', autenticarToken, async (req, res) => {
  try {
    const novoExemplo = new Exemplo(req.body);
    const exemploSalvo = await novoExemplo.save();
    res.status(201).json(exemploSalvo);
  } catch (erro) {
    res.status(400).json({ error: 'Erro ao salvar exemplo' });
  }
});


router.get('/exemplo', autenticarToken, async (req, res) => {
  try {
    const exemplos = await Exemplo.find();
    res.json(exemplos);
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao buscar exemplos' });
  }
});

module.exports = router;