const resultModel = require('../models/resultModel');
class resultSchema {
  /* Promesas y funciones asincronicas
    una funcion asincronica devuelve una promesa
    js es un lenguaje que ejecuta un hilo->solo hace una cosa a la vez
  */
  async listResult() {
    return resultModel.find();
  }
  async showResult(resultId) {
    return resultModel.findById({
      _id: resultId
    });

  }
  async editResult(resultId,score) {
    return resultModel.findById({
      _id: resultId
    }).then(
      (superheroFind) => {
        if (!superheroFind) throw Error('no se encontró el super heroe');
        return resultModel.updateOne({
          resultId
        }, {
          score
        });
      }
    );
  }
  async removeResult(resultId) {
    const result_remove = resultModel.findById({
      _id: resultId
    });
    return resultModel.deleteOne(result_remove);
  }

}
module.exports = resultSchema;
