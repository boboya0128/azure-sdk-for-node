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

/**
 * The properties for updating base image dependency trigger.
 *
 */
class BaseImageTriggerUpdateParameters {
  /**
   * Create a BaseImageTriggerUpdateParameters.
   * @property {string} [baseImageTriggerType] The type of the auto trigger for
   * base image dependency updates. Possible values include: 'All', 'Runtime'
   * @property {string} [status] The current status of trigger. Possible values
   * include: 'Disabled', 'Enabled'. Default value: 'Enabled' .
   * @property {string} name The name of the trigger.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BaseImageTriggerUpdateParameters
   *
   * @returns {object} metadata of BaseImageTriggerUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BaseImageTriggerUpdateParameters',
      type: {
        name: 'Composite',
        className: 'BaseImageTriggerUpdateParameters',
        modelProperties: {
          baseImageTriggerType: {
            required: false,
            serializedName: 'baseImageTriggerType',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            defaultValue: 'Enabled',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BaseImageTriggerUpdateParameters;
