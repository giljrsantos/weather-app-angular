import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { WeatherService } from '../src/app/modules/weather/services/weather.service';

const initialCityName = 'IÚNA'
describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should the function :getWeatherDatas()', () => {
    service.getWeatherDatas(initialCityName)
  })
});
