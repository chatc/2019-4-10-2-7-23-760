module.exports = function main(inputs) {
    dis = inputs['distance']
    park = inputs['parkTime']
    var ans = 6
    if(dis>=2) ans+=(dis-2)*0.8
    if(dis>=8) ans+=(dis-8)*0.4
    return Math.round(ans+park*0.25)
};
