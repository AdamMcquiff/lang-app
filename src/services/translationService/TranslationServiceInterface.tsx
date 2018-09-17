import ITranslationModel from '../../models/Translation';

interface ITranslationService {
    list(): Promise<ITranslationModel[]>,
    create(translation: ITranslationModel): Promise<ITranslationModel>,
    update(translation: ITranslationModel): Promise<ITranslationModel>,
    delete(translation: ITranslationModel): Promise<ITranslationModel>
}

export default ITranslationService;