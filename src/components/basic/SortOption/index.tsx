/********************************************************************************
 * Copyright (c) 2023 Mercedes-Benz Group AG and BMW Group AG
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
import { useState } from 'react'
import { Typography } from '../Typography'

export interface SortOptionsType {
  label: string
  value: string
  disabled?: boolean
}

export const SortOption = ({
  sortOptions,
  setSortOption,
  selectedOption,
  show,
  singleMenu,
}: {
  sortOptions: SortOptionsType[]
  setSortOption?: (value: string) => void
  selectedOption: string
  show: boolean
  singleMenu?: boolean
}) => {
  const handleSortSelection = (e: React.SyntheticEvent, value: string) => {
    e.stopPropagation()
    setSortOption?.(value)
  }

  const [submenuHover, setSubmenuHover] = useState(false)

  return (
    <>
      {show && (
        <Box
          sx={{
            padding: '8px',
          }}
        >
          {sortOptions.map((entry: SortOptionsType) => (
            <Box
              key={entry.value}
              onClick={(e) => {
                handleSortSelection(e, entry.value)
              }}
              sx={{
                padding: '17px',
                minWidth: '152px',
                maxWidth: '220px',
                borderRadius: '10px',
                cursor: entry?.disabled ? 'auto !important' : 'pointer',
                listStyleType: 'none',
                pointerEvents: entry?.disabled ? 'none' : 'initial',
                opacity: entry?.disabled ? '0.5' : '1',
                '&:hover': {
                  backgroundColor: 'rgba(15, 113, 203, 0.05)',
                },
                ...(singleMenu && submenuHover
                  ? { backgroundColor: 'rgb(176 206 235 / 40%)' }
                  : null),
              }}
              onMouseOver={() => {
                setSubmenuHover(true)
              }}
              onMouseLeave={() => {
                setSubmenuHover(false)
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  '&:hover': {
                    color: '#0D55AF',
                  },
                  color:
                    selectedOption === entry.value ||
                    (singleMenu && submenuHover)
                      ? '#0D55AF'
                      : '#000',
                }}
              >
                {entry.label}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}
