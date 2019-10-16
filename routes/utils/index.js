module.exports = function(
    destructuredProperties,
    type
) {
    type = type.toLowerCase();
    const o = destructuredProperties;
    const properties = Object.keys(destructuredProperties);
    if (typeof(type) === "string") {
        let i;
        const len = properties.length;
        for (i = 0; i < len; i += 1) {
            if (typeof(o[properties[i]]) !== type) {
                console.log(`
                    Request body includes property ${o[properties[i]]}
                    which is not the correct type: ${type}
                `);
                return;
            }
        }
    }
    
    if (Object.prototype.toString.call(type) === "[object Array]") {
        if (type.length === properties.length) {
             let i;
             const len = properties.length;
             for (i = 0; i < len; i += 1) {
                if (typeof(properties[i]) !== type[i]) {
                    console.log(`
                        Request body includes property ${o[properties[i]]}
                        which is not the correct type: ${type[i]}
                    `);
                    return;
                }
             }
        }

        if (type.length !== properties.length) {
            console.log("Number of properties must be equal to the amount of types specified in string.");
        }
    }

    if (
           Object.prototype.toString.call(type) !== "[object Array]"
           && typeof(type) !== "string"
       ) {
           console.log("How to use this function: \n");
           console.log("Secondary parameter must be type string or string array.");
           console.log("If all properties should be one type, specify the type.")
               console.log("Example: all properties must be type string so pass in a string of \"string\"");
           console.log("If each property has its own type, pass in an array of strings specifying the type.")
       }
    
}
