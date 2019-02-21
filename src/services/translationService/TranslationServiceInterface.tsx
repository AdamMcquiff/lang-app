import { ITranslationModel } from '../../models/Translation';

export interface ITranslationService {
    list(): Promise<ITranslationModel[]>,
    create(translation: ITranslationModel): Promise<ITranslationModel>,
    update(translation: ITranslationModel): Promise<ITranslationModel>,
    delete(translation: ITranslationModel): Promise<ITranslationModel>
}