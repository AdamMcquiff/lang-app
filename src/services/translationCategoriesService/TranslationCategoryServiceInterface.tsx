import { ITranslationCategoryModel } from '../../models/TranslationCategory';

export interface ITranslationCategoryService {
    list(): Promise<ITranslationCategoryModel[]>,
    create(translation: ITranslationCategoryModel): Promise<ITranslationCategoryModel>,
    delete(translation: ITranslationCategoryModel): Promise<ITranslationCategoryModel>
}