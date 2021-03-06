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
 * Describes the layer4 configuration for public connectivity for this network.
 *
 */
class Layer4IngressConfig {
  /**
   * Create a Layer4IngressConfig.
   * @member {string} [name] Layer4 ingress config name.
   * @member {number} [publicPort] Specifies the public port at which the
   * service endpoint below needs to be exposed.
   * @member {string} [applicationName] The application name which contains the
   * service to be exposed.
   * @member {string} [serviceName] The service whose endpoint needs to be
   * exposed at the public port.
   * @member {string} [endpointName] The service endpoint that needs to be
   * exposed.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Layer4IngressConfig
   *
   * @returns {object} metadata of Layer4IngressConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Layer4IngressConfig',
      type: {
        name: 'Composite',
        className: 'Layer4IngressConfig',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          publicPort: {
            required: false,
            serializedName: 'publicPort',
            type: {
              name: 'Number'
            }
          },
          applicationName: {
            required: false,
            serializedName: 'applicationName',
            type: {
              name: 'String'
            }
          },
          serviceName: {
            required: false,
            serializedName: 'serviceName',
            type: {
              name: 'String'
            }
          },
          endpointName: {
            required: false,
            serializedName: 'endpointName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Layer4IngressConfig;
