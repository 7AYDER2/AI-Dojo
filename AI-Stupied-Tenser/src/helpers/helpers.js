let model = await tf.loadLayersModel('https://storage.googleapis.com/jmstore/TensorFlowJS/EdX/SavedModels/sqftToPropertyPrice/model.json')

model.summary();

// preprocessing
const input = tf.tensor2d([[400]]);
const inputBatch =  tf.tensor2d([[300],[500],[650]]);

const output = model.predict(input);
const outputBatch = model.predict(inputBatch);

output.print();
outputBatch.print();

// PostProcessing -> convert to js using .array to convert to array
const arrayBatch = await outputBatch.array()
console.log(arrayBatch)

input.dispose();
inputBatch.dispose();
output.dispose();
arrayBatch.dispose();

