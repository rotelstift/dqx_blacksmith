function damageCal(temperature, bullion = 'normal') {
    const temp = parseInt(temperature);
    const standard_value_min = 12
    const standard_value_max = 18
    const normal_hit = 1
    const double_hit = 2
    const half_hit = 0.5

    switch(bullion) {
        case 'normal':
            return [
                [temp],
                [temperatureFormula(temp, normal_hit, standard_value_min, 0.5), temperatureFormula(temp, normal_hit, standard_value_max, 0.5)], // 手加減
                [temperatureFormula(temp, normal_hit, standard_value_min, 0.8), temperatureFormula(temp, normal_hit, standard_value_max, 0.8)], // 乱れ
                [temperatureFormula(temp, normal_hit, standard_value_min, 1.0), temperatureFormula(temp, normal_hit, standard_value_max, 1.0)], // 通常
                [temperatureFormula(temp, normal_hit, standard_value_min, 1.2), temperatureFormula(temp, normal_hit, standard_value_max, 1.2)], // 上下斜め4連
                [temperatureFormula(temp, normal_hit, standard_value_min, 2.0), temperatureFormula(temp, normal_hit, standard_value_max, 2.0)], // 2倍
                [temperatureFormula(temp, normal_hit, standard_value_min, 2.5), temperatureFormula(temp, normal_hit, standard_value_max, 2.5)], // 熱風
                [temperatureFormula(temp, normal_hit, standard_value_min, 3.0), temperatureFormula(temp, normal_hit, standard_value_max, 3.0)]  // 3倍
            ]

        case 'light':
            if (temp % 200 == 0) {
                return [
                    [temp],
                [temperatureFormula(temp, double_hit, standard_value_min, 0.5), temperatureFormula(temp, double_hit, standard_value_max, 0.5)], // 手加減
                [temperatureFormula(temp, double_hit, standard_value_min, 0.8), temperatureFormula(temp, double_hit, standard_value_max, 0.8)], // 乱れ
                [temperatureFormula(temp, double_hit, standard_value_min, 1.0), temperatureFormula(temp, double_hit, standard_value_max, 1.0)], // 通常
                [temperatureFormula(temp, double_hit, standard_value_min, 1.2), temperatureFormula(temp, double_hit, standard_value_max, 1.2)], // 上下斜め4連
                [temperatureFormula(temp, double_hit, standard_value_min, 2.0), temperatureFormula(temp, double_hit, standard_value_max, 2.0)], // 2倍
                [temperatureFormula(temp, double_hit, standard_value_min, 2.5), temperatureFormula(temp, double_hit, standard_value_max, 2.5)], // 熱風
                [temperatureFormula(temp, double_hit, standard_value_min, 3.0), temperatureFormula(temp, double_hit, standard_value_max, 3.0)]  // 3倍
                ]
            }
            return [
                [temp],
                [temperatureFormula(temp, normal_hit, standard_value_min, 0.5), temperatureFormula(temp, normal_hit, standard_value_max, 0.5)], // 手加減
                [temperatureFormula(temp, normal_hit, standard_value_min, 0.8), temperatureFormula(temp, normal_hit, standard_value_max, 0.8)], // 乱れ
                [temperatureFormula(temp, normal_hit, standard_value_min, 1.0), temperatureFormula(temp, normal_hit, standard_value_max, 1.0)], // 通常
                [temperatureFormula(temp, normal_hit, standard_value_min, 1.2), temperatureFormula(temp, normal_hit, standard_value_max, 1.2)], // 上下斜め4連
                [temperatureFormula(temp, normal_hit, standard_value_min, 2.0), temperatureFormula(temp, normal_hit, standard_value_max, 2.0)], // 2倍
                [temperatureFormula(temp, normal_hit, standard_value_min, 2.5), temperatureFormula(temp, normal_hit, standard_value_max, 2.5)], // 熱風
                [temperatureFormula(temp, normal_hit, standard_value_min, 3.0), temperatureFormula(temp, normal_hit, standard_value_max, 3.0)]  // 3倍
            ]

        case 'double_and_half':
            if (temp % 400 == 0) {
                return [
                    [temp],
                [temperatureFormula(temp, double_hit, standard_value_min, 0.5), temperatureFormula(temp, double_hit, standard_value_max, 0.5)], // 手加減
                [temperatureFormula(temp, double_hit, standard_value_min, 0.8), temperatureFormula(temp, double_hit, standard_value_max, 0.8)], // 乱れ
                [temperatureFormula(temp, double_hit, standard_value_min, 1.0), temperatureFormula(temp, double_hit, standard_value_max, 1.0)], // 通常
                [temperatureFormula(temp, double_hit, standard_value_min, 1.2), temperatureFormula(temp, double_hit, standard_value_max, 1.2)], // 上下斜め4連
                [temperatureFormula(temp, double_hit, standard_value_min, 2.0), temperatureFormula(temp, double_hit, standard_value_max, 2.0)], // 2倍
                [temperatureFormula(temp, double_hit, standard_value_min, 2.5), temperatureFormula(temp, double_hit, standard_value_max, 2.5)], // 熱風
                [temperatureFormula(temp, double_hit, standard_value_min, 3.0), temperatureFormula(temp, double_hit, standard_value_max, 3.0)]  // 3倍
                ]
            }
            if (temp % 200 == 0) {
                return [
                    [temp],
                [temperatureFormula(temp, half_hit, standard_value_min, 0.5), temperatureFormula(temp, half_hit, standard_value_max, 0.5)], // 手加減
                [temperatureFormula(temp, half_hit, standard_value_min, 0.8), temperatureFormula(temp, half_hit, standard_value_max, 0.8)], // 乱れ
                [temperatureFormula(temp, half_hit, standard_value_min, 1.0), temperatureFormula(temp, half_hit, standard_value_max, 1.0)], // 通常
                [temperatureFormula(temp, half_hit, standard_value_min, 1.2), temperatureFormula(temp, half_hit, standard_value_max, 1.2)], // 上下斜め4連
                [temperatureFormula(temp, half_hit, standard_value_min, 2.0), temperatureFormula(temp, half_hit, standard_value_max, 2.0)], // 2倍
                [temperatureFormula(temp, half_hit, standard_value_min, 2.5), temperatureFormula(temp, half_hit, standard_value_max, 2.5)], // 熱風
                [temperatureFormula(temp, half_hit, standard_value_min, 3.0), temperatureFormula(temp, half_hit, standard_value_max, 3.0)]  // 3倍
                ]
            }
            return [
                [temp],
                [temperatureFormula(temp, normal_hit, standard_value_min, 0.5), temperatureFormula(temp, normal_hit, standard_value_max, 0.5)], // 手加減
                [temperatureFormula(temp, normal_hit, standard_value_min, 0.8), temperatureFormula(temp, normal_hit, standard_value_max, 0.8)], // 乱れ
                [temperatureFormula(temp, normal_hit, standard_value_min, 1.0), temperatureFormula(temp, normal_hit, standard_value_min, 1.0)], // 通常
                [temperatureFormula(temp, normal_hit, standard_value_min, 1.2), temperatureFormula(temp, normal_hit, standard_value_max, 1.2)], // 上下斜め4連
                [temperatureFormula(temp, normal_hit, standard_value_min, 2.0), temperatureFormula(temp, normal_hit, standard_value_max, 2.0)], // 2倍
                [temperatureFormula(temp, normal_hit, standard_value_min, 2.5), temperatureFormula(temp, normal_hit, standard_value_max, 2.5)], // 熱風
                [temperatureFormula(temp, normal_hit, standard_value_min, 3.0), temperatureFormula(temp, normal_hit, standard_value_max, 3.0)]  // 3倍
            ]
        default:
            return [
                [temp],
                [temperatureFormula(temp, normal_hit, standard_value_min, 0.5), temperatureFormula(temp, normal_hit, standard_value_max, 0.5)], // 手加減
                [temperatureFormula(temp, normal_hit, standard_value_min, 0.8), temperatureFormula(temp, normal_hit, standard_value_max, 0.8)], // 乱れ
                [temperatureFormula(temp, normal_hit, standard_value_min, 1.0), temperatureFormula(temp, normal_hit, standard_value_max, 1.0)], // 通常
                [temperatureFormula(temp, normal_hit, standard_value_min, 1.2), temperatureFormula(temp, normal_hit, standard_value_max, 1.2)], // 上下斜め4連
                [temperatureFormula(temp, normal_hit, standard_value_min, 2.0), temperatureFormula(temp, normal_hit, standard_value_max, 2.0)], // 2倍
                [temperatureFormula(temp, normal_hit, standard_value_min, 2.5), temperatureFormula(temp, normal_hit, standard_value_max, 2.5)], // 熱風
                [temperatureFormula(temp, normal_hit, standard_value_min, 3.0), temperatureFormula(temp, normal_hit, standard_value_max, 3.0)]  // 3倍
            ]
    }
}

function temperatureFormula(temperature, hit, standard_value, magnification) {
    return Math.ceil(hit * Math.ceil((0.5 + 0.0005 * temperature) * Math.ceil(standard_value * magnification)))
}