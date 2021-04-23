import { getCustomRepository, Repository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import { User } from '../entities/User';

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    return user;
  }

  async create(email: string) {
    // Verificar se o usuário existe
    const usersExists = await this.usersRepository.findOne({
      email,
    });

    // Se existir, retornar user
    if (usersExists) return usersExists;

    // Se não existir, salvar no DB
    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UsersService };
