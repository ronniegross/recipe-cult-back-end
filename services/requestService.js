const createInputResponse = (requestBody) => {
    const input1 = requestBody.input1
    const input2 = requestBody.input2
    const input3 = requestBody.input3
    const message = {
        message: "Received these inputs",
        input1,
        input2,
        input3
    }
    return message;
}

module.exports = {
    createInputResponse
}