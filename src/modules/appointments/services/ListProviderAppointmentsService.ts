import { injectable, inject } from 'tsyringe';

import CacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: CacheProvider
  ) {}

  public async execute({
    provider_id,
    day,
    month,
    year,
  }: IRequest): Promise<Appointment[]> {
    const cacheData = await this.cacheProvider.recover(
      `${provider_id}-appointments-in-day-${day}-${month}-${year}`
    );

    const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
      { provider_id, day, month, year }
    );

    await this.cacheProvider.save(
      `${provider_id}-appointments-in-day-${day}-${month}-${year}`,
      JSON.stringify(appointments)
    );

    return appointments;
  }
}

export default ListProviderAppointmentsService;
