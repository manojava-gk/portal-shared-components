/********************************************************************************
 * Copyright (c) 2021, 2024  Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import React from 'react'
import { QuickLinks as Component } from './index'

export default {
  title: 'QuickLinks',
  component: Component,
  argTypes: {},
}

const Template = (args: any) => <Component {...args} />

export const QuickLinks = Template.bind({})
QuickLinks.args = {
  headerTitle: 'Quick Links',
  alignButtons: 'left',
  items: [
    {
      backgroundColor: '#e2e2e4',
      title: 'Order Status',
      url: 'https://portal.dev.demo.catena-x.net/documentation/',
    },
    {
      backgroundColor: '#e2e2e4',
      title: 'shopping-help',
      url: 'https://portal.dev.demo.catena-x.net/documentation/',
    },
    {
      backgroundColor: '#e2e2e4',
      title: 'Returns',
      url: 'https://portal.dev.demo.catena-x.net/documentation/',
    },
    {
      backgroundColor: '#e2e2e4',
      title: 'Your Saves',
      url: 'https://portal.dev.demo.catena-x.net/documentation/',
    },
  ],
}

