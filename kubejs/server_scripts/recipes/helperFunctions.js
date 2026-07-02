    /**
     * Converts any ingredient input to a JSON ingredient object.
     * @template T
     * @param {T} input - The input to convert (string, tag, Ingredient, ItemStack, or plain {item,tag} object)
     * @param {number} [count] - Optional item count (overrides any count in string format)
     * @param {Object} [options] - Conversion options
     * @param {boolean} [options.splitCounts=false] - If true, expands counts into multiple separate objects instead of using a "count" property
     * @returns {object|object[]} The ingredient object (or array of objects if splitCounts is true and count > 1)
     */
    function makeJsonIngredient(input, count, options) {
        if (options === undefined) options = {};
        var splitCounts = options.splitCounts === undefined ? false : options.splitCounts;

        // If input is a plain JavaScript object with item or tag, apply count if needed
        if (typeof input === "object" && input !== null &&
            Object.getPrototypeOf(input) === Object.prototype &&
            (input.item || input.tag)) {
            if (count !== undefined && count > 1) {
                if (splitCounts) {
                    // Return an array of separate objects
                    var baseObj = {};
                    for (var key in input) {
                        if (input.hasOwnProperty(key)) baseObj[key] = input[key];
                    }
                    delete baseObj.count;
                    var resultArray = [];
                    for (var i = 0; i < count; i++) {
                        resultArray.push(baseObj);
                    }
                    return resultArray;
                } else {
                    input.count = count;
                }
            } else if (count === 1 && input.count) {
                delete input.count;
            }
            return input;
        }

        var baseIngredient;
        var finalCount = count;

        // Handle string inputs: "5x minecraft:iron_ingot" or "#forge:ingots"
        if (typeof input === "string") {
            var countMatch = input.match(/^(\d+)x\s+(.+)$/);
            if (countMatch) {
                finalCount = finalCount !== undefined ? finalCount : parseInt(countMatch[1], 10);
                input = countMatch[2];
            }
            if (input.startsWith("#")) {
                baseIngredient = Ingredient.of(input);                // tag
            } else {
                baseIngredient = Ingredient.of(Item.of(input).id);   // single item
            }
        } else {
            // Assume it's an Ingredient, ItemStack, or something Ingredient.of understands
            baseIngredient = Ingredient.of(input);
        }

        // Convert to JSON and flatten any "ingredient" wrapper
        var obj = JSON.parse(baseIngredient.toJson().toString());
        var ingredientObj = obj.ingredient || obj;

        // Apply splitCounts logic
        if (finalCount !== undefined && finalCount > 1) {
            if (splitCounts) {
                // Return an array of identical objects (each without a count)
                var baseCopy = {};
                for (var key in ingredientObj) {
                    if (ingredientObj.hasOwnProperty(key)) baseCopy[key] = ingredientObj[key];
                }
                delete baseCopy.count;
                var arr = [];
                for (var i = 0; i < finalCount; i++) {
                    arr.push(baseCopy);
                }
                return arr;
            } else {
                ingredientObj.count = finalCount;
            }
        } else if (finalCount === 1 && ingredientObj.count) {
            delete ingredientObj.count;
        }

        return ingredientObj;
    }

    /**
     * Converts an array of ingredient inputs to an array of JSON ingredient objects.
     * Supports automatic flattening when splitCounts is enabled.
     * @template T
     * @param {T|T[]} inputs - The inputs to convert
     * @param {number} [defaultCount] - Default count for all entries
     * @param {Object} [options] - Conversion options
     * @param {boolean} [options.splitCounts=false] - If true, expands counts into multiple separate objects
     * @returns {Array<object>} Array of ingredient objects (possibly expanded)
     */
    function makeJsonIngredients(inputs, defaultCount, options) {
        if (options === undefined) options = {};
        if (!Array.isArray(inputs)) inputs = [inputs];
        var results = [];
        for (var i = 0; i < inputs.length; i++) {
            var result = makeJsonIngredient(inputs[i], defaultCount, options);
            results.push(result);
        }
        // Flatten the array if any result is an array (due to splitCounts)
        var flattened = [];
        for (var i = 0; i < results.length; i++) {
            var item = results[i];
            if (Array.isArray(item)) {
                for (var j = 0; j < item.length; j++) {
                    flattened.push(item[j]);
                }
            } else {
                flattened.push(item);
            }
        }
        return flattened;
    }

    function autoworkCrushingHelper(event, output, input) {
        output = Item.of(output);
        event.custom({
            type: "autowork:crushing",
            block: makeJsonIngredient(input),
            result: {
                id: output.id,
                count: output.count
            }
        })
    }

    const colors = [
    "white",
    "light_gray",
    "gray",
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "light_blue",
    "blue",
    "purple",
    "magenta",
    "pink",
]

function autoworkPaintingHelper(event, inputTag, outputFormatter) {
    colors.forEach((color) => {
        event.custom({
            type: "autowork:painting",
            dye: { item: `minecraft:${color}_dye` },
            input: { tag: inputTag},
            result: { id: outputFormatter(color) }
        })
    })
}