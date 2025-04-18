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

import { Box, ClickAwayListener, useTheme } from '@mui/material'
import { type Theme } from '@mui/material/styles'
import { type SxProps } from '@mui/system'
import { Typography } from '../../basic/Typography'

interface UserMenuProps {
  open: boolean
  userName: string
  userRole: string
  children?: React.ReactElement[]
  shadow?: boolean
  onClickAway?: (event: MouseEvent | TouchEvent) => void
  sx?: SxProps<Theme>
}

export const UserMenu = ({
  open,
  userName,
  userRole,
  children,
  sx = {
    top: '0px',
    width: '256px',
    position: 'absolute',
  },
  shadow = true,
  onClickAway = () => {
    // empty
  },
  ...props
}: UserMenuProps) => {
  const { spacing, shadows } = useTheme()

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Box
        display={open ? 'block' : 'none'}
        sx={{
          borderRadius: 4,
          backgroundColor: shadow ? 'background.background01' : '#fff',
          boxShadow: shadow ? shadows['20'] : 'none',
          overflow: 'hidden',
          right: 0,
          ...sx,
        }}
        {...props}
      >
        <Box
          sx={{
            backgroundColor: shadow ? 'background.background02' : '#fff',
            borderBottom: '1px solid',
            borderColor: 'border.border01',
            padding: spacing(2, 3),
          }}
        >
          <Typography
            variant="label3"
            sx={{ color: 'text.secondary', display: 'block' }}
          >
            {userName}
          </Typography>
          <Typography variant="label4" sx={{ color: 'text.tertiary' }}>
            {userRole}
          </Typography>
        </Box>
        {children}
      </Box>
    </ClickAwayListener>
  )
}
