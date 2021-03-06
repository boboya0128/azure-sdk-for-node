/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * A combination of user defined name and user specified data and recognition
 * model name for largePersonGroup/personGroup, and largeFaceList/faceList.
 *
 * @extends models['NameAndUserDataContract']
 */
class MetaDataContract extends models['NameAndUserDataContract'] {
  /**
   * Create a MetaDataContract.
   * @property {string} [recognitionModel] Possible values include:
   * 'recognition_01', 'recognition_02'. Default value: 'recognition_01' .
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of MetaDataContract
   *
   * @returns {object} metadata of MetaDataContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetaDataContract',
      type: {
        name: 'Composite',
        className: 'MetaDataContract',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            constraints: {
              MaxLength: 128
            },
            type: {
              name: 'String'
            }
          },
          userData: {
            required: false,
            serializedName: 'userData',
            constraints: {
              MaxLength: 16384
            },
            type: {
              name: 'String'
            }
          },
          recognitionModel: {
            required: false,
            nullable: false,
            serializedName: 'recognitionModel',
            defaultValue: 'recognition_01',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MetaDataContract;
