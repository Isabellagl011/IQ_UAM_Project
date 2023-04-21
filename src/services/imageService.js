const imageModel = require('../models/imageModel');
class imageSchema {
  /* Promesas y funciones asincronicas
    una funcion asincronica devuelve una promesa
    js es un lenguaje que ejecuta un hilo->solo hace una cosa a la vez
  */
  async listImages() {
    return imageModel.find();
  }
  async showImages(resultId) {
    return imageModel.findById({
      _id: resultId
    });

  }
  async editImages(resultId,score) {
    return imageModel.findById({
      _id: resultId
    }).then(
      (superheroFind) => {
        if (!superheroFind) throw Error('no se encontró el super heroe');
        return imageModel.updateOne({
          resultId
        }, {
          score
        });
      }
    );
  }
  async removeImages(resultId) {
    const result_remove = imageModel.findById({
      _id: resultId
    });
    return imageModel.deleteOne(result_remove);
  }

}
module.exports = imageSchema;
