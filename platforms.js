/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

module.exports = {
    'ios' : {
        parser : './src/metadata/ios_parser',
        url    : 'https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git',
        version: '3.1.0-rc1'
    }, 
    'android' : {
        parser : './src/metadata/android_parser',
        url    : 'https://git-wip-us.apache.org/repos/asf?p=cordova-android.git',
        version: '3.1.0-rc1'
    }, 
    'wp7' : {
        parser : './src/metadata/wp7_parser',
        url    : 'https://git-wip-us.apache.org/repos/asf?p=cordova-wp8.git',
        version: '3.1.0-rc1'
    },
    'wp8' : {
        parser : './src/metadata/wp8_parser',
        url    : 'https://git-wip-us.apache.org/repos/asf?p=cordova-wp8.git',
        version: '3.1.0-rc1'
    },
    'blackberry10' : {
        parser : './src/metadata/blackberry10_parser',
        url    : 'https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git',
        version: '3.1.0-rc1'
    },
    'www':{
        url    : 'https://git-wip-us.apache.org/repos/asf?p=cordova-app-hello-world.git',
        version: '3.1.0-rc1'
    },
    'firefoxos':{
        parser: './src/metadata/firefoxos_parser',
        url    : 'https://git-wip-us.apache.org/repos/asf?p=cordova-firefoxos.git',
        version: '3.1.0-rc1'
    }
};

var addModuleProperty = require('./src/util').addModuleProperty;
Object.keys(module.exports).forEach(function(key) {
    var obj = module.exports[key];
    if (obj.parser) {
        addModuleProperty(module, 'parser', obj.parser, obj);
    }
});
