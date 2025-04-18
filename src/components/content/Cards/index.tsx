/********************************************************************************
 * Copyright (c) 2023 BMW Group AG
 * Copyright (c) 2023 Contributors to the Eclipse Foundation
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

import { Box } from '@mui/material'
import { Card, type CardProps } from './Card'
import { CardAddService } from './CardAddService'

export type CardItems = Omit<
  CardProps,
  'variant' | 'imageSize' | 'imageShape' | 'buttonText' | 'status'
>

export interface SubItems {
  label: string
  value: string
}

interface CardsProps {
  items: CardItems[]
  buttonText: CardProps['buttonText']
  variant?: CardProps['variant']
  expandOnHover?: CardProps['expandOnHover']
  filledBackground?: CardProps['filledBackground']
  imageSize?: CardProps['imageSize']
  imageShape?: CardProps['imageShape']
  imageLoader?: CardProps['imageLoader']
  imageElement?: CardProps['imageElement']
  columns?: number
  readMoreText?: CardProps['readMoreText']
  readMoreLink?: CardProps['readMoreLink']
  addButtonClicked?: boolean
  showAddNewCard?: boolean
  newButtonText?: string
  onNewCardButton?: React.MouseEventHandler
  onCardClick?: (item: CardItems) => void
  subMenu?: boolean
  activeSubmenuOptions?: SubItems[]
  inactiveSubmenuOptions?: SubItems[]
  submenuClick?: (sortMenu: string, id?: string) => undefined
  tooltipText?: string
  showStatus?: boolean
  status?: string
  boxClickable?: boolean
  showFavIcon?: boolean
  showCardViewOfAddServiceCard?: boolean
}

export const Cards = ({
  items,
  buttonText,
  readMoreText,
  readMoreLink,
  variant,
  imageSize,
  imageShape,
  imageLoader,
  // @ts-expect-error keep for backward compatibility
  columns = 6,
  expandOnHover,
  filledBackground,
  addButtonClicked = false,
  // @ts-expect-error keep for backward compatibility
  showAddNewCard = false,
  newButtonText,
  onNewCardButton,
  onCardClick = () => {
    // empty
  },
  subMenu = false,
  activeSubmenuOptions = [],
  inactiveSubmenuOptions = [],
  submenuClick = () => {
    // empty
  },
  tooltipText,
  showStatus = true,
  boxClickable = false,
  showFavIcon = false,
  showCardViewOfAddServiceCard = true,
}: CardsProps) => {
  const settings = {
    variant,
    buttonText,
    readMoreText,
    readMoreLink,
    imageSize,
    imageShape,
    imageLoader,
    expandOnHover,
    filledBackground,
    addButtonClicked,
    subMenu,
    activeSubmenuOptions,
    inactiveSubmenuOptions,
    submenuClick,
    tooltipText,
    showStatus,
    boxClickable,
    showFavIcon,
  }

  return (
    <Box
      sx={{
        display: 'flex',
        msFlexWrap: 'wrap',
        flexWrap: 'wrap',
        marginRight: '-10px',
        marginLeft: '-10px',
        justifyContent: 'center',
      }}
    >
      {onNewCardButton !== undefined && (
        <CardAddService
          backgroundColor={'common.white'}
          onButtonClick={onNewCardButton}
          title={newButtonText}
          showCardView={showCardViewOfAddServiceCard}
        />
      )}
      {items?.map((item) => (
        <Card
          {...settings}
          {...item}
          key={item.id}
          onClick={() => {
            onCardClick(item)
          }}
        />
      ))}
    </Box>
  )
}
