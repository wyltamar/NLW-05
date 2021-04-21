import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController';

const routes = Router();

const settingsController = new SettingsController();

//prettier-ignore
routes.post('/settings', settingsController.create);

export { routes };
