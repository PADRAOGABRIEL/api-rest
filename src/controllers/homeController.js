import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'maria',
        sobrenome: 'padrao',
        email: 'mariapadrao@gmail.com',
        idade: 21,
        peso: 50,
        altura: 1.54,
      });
      res.json(novoAluno);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new HomeController();
