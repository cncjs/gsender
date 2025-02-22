/*
 * Copyright (C) 2021 Sienci Labs Inc.
 *
 * This file is part of gSender.
 *
 * gSender is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, under version 3 of the License.
 *
 * gSender is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with gSender.  If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact for information regarding this program and its license
 * can be sent through gSender@sienci.com or mailed to the main office
 * of Sienci Labs Inc. in Waterloo, Ontario, Canada.
 *
 */

import {
    IMPERIAL_UNITS,
    METRIC_UNITS
} from '../constants';

// Converts value from millimeters to inches
export const mm2in = (val = 0) => (val / 25.4);

// Converts values from inches to millimeters
export const in2mm = (val = 0) => (val * 25.4);

// Maps value to imperial units
export const mapValueToImperialUnits = (val) => {
    val = Number(val) || 0;
    return mm2in(val).toFixed(3) * 1;
};

// Maps value to metric units
export const mapValueToMetricUnits = (val) => {
    val = Number(val) || 0;
    return val.toFixed(2) * 1;
};

// Maps value to the specified units
// in: 0.10203 -> "0.102"
// mm: 0.10002 -> "0.1"
export const mapValueToUnits = (val, units = METRIC_UNITS) => {
    if (units === IMPERIAL_UNITS) {
        return mapValueToImperialUnits(val);
    }
    if (units === METRIC_UNITS) {
        return mapValueToMetricUnits(val);
    }
    return Number(val) || 0;
};

// Maps position to imperial units
export const mapPositionToImperialUnits = (pos) => {
    pos = Number(pos) || 0;
    return mm2in(pos).toFixed(3);
};

// Maps position to metric units
export const mapPositionToMetricUnits = (pos) => {
    pos = Number(pos) || 0;
    return pos.toFixed(2);
};

// Maps position to the specified units
// in: 0.12345 > "0.1235"
// mm: 0.1234  > "0.123"
export const mapPositionToUnits = (pos, units = METRIC_UNITS) => {
    if (units === IMPERIAL_UNITS) {
        return mapPositionToImperialUnits(pos);
    }
    if (units === METRIC_UNITS) {
        return mapPositionToMetricUnits(pos);
    }
    return Number(pos).toFixed(2) || 0;
};

export const convertValueToImperialUnits = (pos) => {
    pos = Number(pos) || 0;
    return mm2in(pos).toFixed(3);
};

export const convertValueToMetricUnits = (pos) => {
    pos = Number(pos) || 0;
    return in2mm(pos).toFixed(2);
};

export const mapPositionToPreferredUnits = (pos, currentUnits, preferredUnits) => {
    if (currentUnits !== preferredUnits) {
        if (preferredUnits === IMPERIAL_UNITS) {
            return convertValueToImperialUnits(pos);
        } else {
            return convertValueToMetricUnits(pos);
        }
    }
    return Number(pos).toFixed(3) || 0;
};
