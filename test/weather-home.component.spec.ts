import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherHomeComponent } from '../src/app/modules/weather/page/weather-home/weather-home.component';
import { WeatherService } from '../src/app/modules/weather/services/weather.service';
import { mockResponseWeatherDatas } from './mock/weather-response.mock';

describe('WeatherHomeComponent', () => {
  let component: WeatherHomeComponent;
  let fixture: ComponentFixture<WeatherHomeComponent>;

  let service: WeatherService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherHomeComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
      providers: [WeatherService]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherHomeComponent);
    component = fixture.componentInstance;

    service = TestBed.inject(WeatherService)
    fixture.detectChanges();

    component.initialCityName = 'Iúna';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the function :getWeatherDatas()', () => {
    let initialCityName = 'Iúna';
    // espiando a chamada dos dados
    const spyServiceSuccess = jest.spyOn(service, 'getWeatherDatas').mockImplementation(() => of(mockResponseWeatherDatas));
    component.getWeatherDatas(initialCityName);
    expect(spyServiceSuccess).toHaveBeenCalled()
  });

  it('deve retornar erro ao chamar o metodo listaDebitoStatus()', () => {
    let initialCityName = 'Iúna';
    const error = 'Error'
    const spyServiceError = jest.spyOn(service, 'getWeatherDatas').mockImplementation(() => throwError(() => error));
    component.getWeatherDatas(initialCityName)
    expect(spyServiceError).toHaveBeenCalled()
  });


  it('should the function :onSubmit()', () => {
    component.onSubmit();
    const initialCityName = component.initialCityName;

    expect(initialCityName).toEqual('')
  });
});
