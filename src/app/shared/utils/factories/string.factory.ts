export class StringFactory{
    /**
     * Replace accented char by their ascii equivalent. To lower case and space replaced by hyphen.
     * @param str : A string to normalise
     * @returns The normalized string
     */
    replaceSpecialChars(str : string){
        return  this.removeExtraHypensFromBeginning(
                this.replaceMultipleHyphensByOne(
                this.replaceSpaceWithHyphens(
                this.replaceAccents(str.normalize('NFD').toLowerCase())))); 
    }

    /**
     * Replace accented char by their ascii equivalent
     * @param str : String to modify
     * @returns Modified string
     */
    replaceAccents(str : string){
        return str.replace(/[\u0300-\u036f]/g, ''); // 
    }

    /**
     * Replace space and other characters by hyphen
     * @param str : String to modify
     * @returns Modified string
     */
    replaceSpaceWithHyphens(str : string){
    return str.replace(/([^\w]+|\s+)/g, '-');
    }

    /**
     * Replaces multiple hyphens by one hyphen
     * @param str : String to modify
     * @returns Modified string
     */
    replaceMultipleHyphensByOne(str : string){
    return str.replace(/\-\-+/g, '-');
    }

    /**
     * Remove extra hyphens from beginning or end of the string
     * @param str : String to modify
     * @returns Modified string
     */
    removeExtraHypensFromBeginning(str : string){
    return str.replace(/(^-+|-+$)/, '');// 
    }

    /**
     * Compare string aftrer normalization
     * @param str1 : Le premier string
     * @param str2 : Le deuxième string
     * @returns True si les deux sont identiques après normalisation
     */
    compareNormalizedStrings(str1: string, str2 : string){
    // console.log(str1);
    // console.log(str2);
    return this.replaceSpecialChars(str1) == this.replaceSpecialChars(str2);
    }
}