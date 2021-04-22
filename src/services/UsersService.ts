import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    // Verificar se o usuário existe
    const usersExists = await usersRepository.findOne({
      email,
    });

    // Se existir, retornar user
    if (usersExists) return usersExists;

    // Se não existir, salvar no DB
    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { UsersService };
