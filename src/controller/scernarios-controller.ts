import { Request, Response } from 'express';
import Scenarios from '../models/scenarios.model';

export const registerScenario = async (req: Request, res: Response) => {
  const { title, description, difficulty } = req.body;

  if (!title || !description || !difficulty) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const scemariosExistes = await Scenarios.findOne({ where: { title } });
  if (scemariosExistes) {
    return res.status(400).json({ error: 'Cenário ja cadastrado' });
  }

  const newScenarios = await Scenarios.create({
    title,
    description,
    difficulty,
  });

  return res.status(200).json({
    message: 'Cenário registrado com sucesso',
    scenarios: {
      id: newScenarios.id,
      title: newScenarios.title,
      description: newScenarios.description,
      difficulty: newScenarios.difficulty,
    },
  });
};
