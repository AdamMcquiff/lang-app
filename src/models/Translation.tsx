interface ITranslationModel {
    id?: number,
    native_word: string,
    translated_word: string,
    categoryId: number | undefined
}

export default ITranslationModel;