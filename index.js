'use strict';

/**
 * Expose transformer
 * @api public
 */
var CC_PATTERN = require('credit-card-regex');

var NON_BREAKING_SPACE = 160;

module.exports = function (input, inputOptions) {
    var defaultOptions = {"separator": String.fromCharCode(NON_BREAKING_SPACE)},
        options = inputOptions || defaultOptions;
    var format = function (input) {
        var output = "";

        for (var i = 0; i < input.length; i++) {
            if (i % 4 == 0 && i > 0) {
                output += options.separator;
            }
            output += input[i];
        }

        return output;
    };
    var formatCards = function (inputString) {
        var cards = inputString.match(CC_PATTERN(inputString));
        if (cards === null) {
            return inputString;
        }
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i].trim()
                , formattedCard = format(card);
            inputString = inputString.replace(card, formattedCard);
        }
        return inputString;
    };

    return formatCards(input);
};