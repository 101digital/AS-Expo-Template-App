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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Image } from 'react-native';
import { convertPercentageToPx } from '../../utils/commonUtils';
var ASImage = function (props) {
    var source = props.source, _a = props.width, width = _a === void 0 ? 100 : _a, _b = props.height, height = _b === void 0 ? 100 : _b, style = props.style, _c = props.resizeMode, resizeMode = _c === void 0 ? 'cover' : _c, _d = props.roundImageSize, roundImageSize = _d === void 0 ? 0 : _d, otherProps = __rest(props, ["source", "width", "height", "style", "resizeMode", "roundImageSize"]);
    var imageSource = typeof source === 'string' && (source === null || source === void 0 ? void 0 : source.startsWith('http')) ? { uri: source } : source;
    var roundImageSizeValue = convertPercentageToPx(roundImageSize, true);
    return (React.createElement(Image, __assign({ source: imageSource, style: [{
                width: roundImageSizeValue || width,
                height: roundImageSizeValue || height,
                borderRadius: roundImageSizeValue
            }, style], resizeMode: resizeMode }, otherProps)));
};
export default ASImage;
/*
                        <ASImage source={'https:i.imgur.com/oLgjoWx.png'} style={{width: '35%', height: '20%'}}
                         resizeMode={'contain'}/>
* */
