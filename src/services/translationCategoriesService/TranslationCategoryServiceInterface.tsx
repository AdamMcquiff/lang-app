import ITranslationCategoryModel from '../../models/TranslationCategory';

interface ITranslationCategoryService {
    list(): Promise<ITranslationCategoryModel[]>,
    create(translation: ITranslationCategoryModel): Promise<ITranslationCategoryModel>
}

export default ITranslationCategoryService;