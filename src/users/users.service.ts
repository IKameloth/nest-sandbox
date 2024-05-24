import { Injectable } from '@nestjs/common'

export type User = {
  userId: string
  username: string
  password: string
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: '1',
      username: 'kamello',
      password: 'pass123'
    },
    {
      userId: '2',
      username: 'kamilla',
      password: 'pass1234'
    }
  ]

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username)
  }
}
