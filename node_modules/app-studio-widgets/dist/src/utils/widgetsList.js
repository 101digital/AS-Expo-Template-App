var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ASWidgetsList = /** @class */ (function () {
    function ASWidgetsList() {
    }
    // ASContainerProps | ASTextProps | ASButtonProps | ASTextFieldProps | ASSpacerProps | ASDividerProps | ASExpandableTextProps | ASCheckBoxProps | ASProgressBarProps | ASListViewProps
    ASWidgetsList.getWidgetAttributes = function (attributes) {
        var result = '';
        var atrributesObj = __assign({}, attributes);
        if (atrributesObj === null || atrributesObj === void 0 ? void 0 : atrributesObj.children) {
            delete atrributesObj['children'];
        }
        for (var key in atrributesObj) {
            var attributeValue = atrributesObj[key];
            switch (typeof attributeValue) {
                case 'number':
                    attributeValue = "{".concat(attributeValue, "}");
                    break;
                case 'string':
                    attributeValue = "{\"".concat(attributeValue, "\"}");
                    break;
                case 'object':
                    attributeValue = "{".concat(JSON.stringify(attributeValue), "}");
                    break;
                default:
                    attributeValue = "{\"".concat(attributeValue, "\"}");
                    break;
            }
            result += " ".concat(key, "=").concat(attributeValue);
        }
        return result;
    };
    ASWidgetsList.prototype.getWidgets = function () {
        return {
            ASContainer: function (attributes) { return "<ASContainer".concat(ASWidgetsList.getWidgetAttributes(attributes), ">\n").concat(attributes === null || attributes === void 0 ? void 0 : attributes.children, "\n</ASContainer>"); },
            ASText: function (attributes) { return "<ASText".concat(ASWidgetsList.getWidgetAttributes(attributes), ">").concat(attributes === null || attributes === void 0 ? void 0 : attributes.children, "</ASText>"); },
            ASButton: function (attributes) { return "<ASButton".concat(ASWidgetsList.getWidgetAttributes(attributes), ">").concat(attributes === null || attributes === void 0 ? void 0 : attributes.children, "</ASButton>"); },
            ASTextField: function (attributes) { return "<ASTextField".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
            ASColumn: function (attributes) { return "<ASColumn".concat(ASWidgetsList.getWidgetAttributes(attributes), ">").concat(attributes === null || attributes === void 0 ? void 0 : attributes.children, "</ASColumn>"); },
            ASRow: function (attributes) { return "<ASRow".concat(ASWidgetsList.getWidgetAttributes(attributes), ">").concat(attributes === null || attributes === void 0 ? void 0 : attributes.children, "</ASRow>"); },
            ASSpacer: function (attributes) { return "<ASSpacer".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
            ASDivider: function (attributes) { return "<ASDivider".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
            ASVerticalDivider: function (attributes) { return "<ASVerticalDivider".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
            ASFormValidation: function (attributes) { return "<ASFormValidation".concat(ASWidgetsList.getWidgetAttributes(attributes), ">").concat(attributes === null || attributes === void 0 ? void 0 : attributes.children, "</ASFormValidation>"); },
            ASRichText: function (attributes) { return "<ASRichText".concat(ASWidgetsList.getWidgetAttributes(attributes), ">").concat(attributes === null || attributes === void 0 ? void 0 : attributes.children, "</ASRichText>"); },
            ASImage: function (attributes) { return "<ASImage".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
            ASDropdown: function (attributes) { return "<ASDropdown".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
            ASExpandableText: function (attributes) { return "<ASExpandableText".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
            ASWrap: function (attributes) { return "<ASWrap".concat(ASWidgetsList.getWidgetAttributes(attributes), ">").concat(attributes === null || attributes === void 0 ? void 0 : attributes.children, "</ASWrap>"); },
            ASSwitch: function (attributes) { return "<ASSwitch".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
            ASCheckBox: function (attributes) { return "<ASCheckBox".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
            ASProgressBar: function (attributes) { return "<ASProgressBar".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
            ASStack: function (attributes) { return "<ASStack".concat(ASWidgetsList.getWidgetAttributes(attributes), ">").concat(attributes === null || attributes === void 0 ? void 0 : attributes.children, "</ASStack>"); },
            ASListView: function (attributes) { return "<ASListView".concat(ASWidgetsList.getWidgetAttributes(attributes), "/>"); },
        };
    };
    ASWidgetsList.prototype.getWidgetByName = function (name) {
        var _a;
        return (_a = this.getWidgets()) === null || _a === void 0 ? void 0 : _a[name];
    };
    return ASWidgetsList;
}());
export { ASWidgetsList };
// const a = new ASWidgetsList()
// const asText = a.getWidgets().ASText({
//     children: 'haha',
//     style: {fontSize: 12},
//     numberOfLines: 1,
//     ellipsizeMode: "tail"
// },)
// const asContainer = a.getWidgetByName('ASContainer')({children: asText, style: {flex: 1}})
//
// console.log('RESULT WIDGET:\n', asContainer , '\n')
//  <ASContainer style={{"flex":1}}>
//  <ASText style={{"fontSize":12}} numberOfLines={1} ellipsizeMode={"tail"}>haha</ASText>
//  </ASContainer>
//  ts-node --esm  /Users/huacatluong/101digital/generator-app/app-studio-widgets/src/utils/WidgetsList.ts
