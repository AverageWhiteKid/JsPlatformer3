var GAME_LEVELS = [
  ["          x!        !    !     !    !    x !!!!! !    ! x !   ! !!!!!  !      !!",
   "          x!       ! !    !   !    ! !   x !   ! !!!!!! x !!  ! !   !  !      !!",
   " o        x!      !!!!!    ! !    !!!!!  x !!!!! !    ! x ! ! ! !   !  !      !!",
   "xxx   =   x!!!!  !     !    !    !     ! x xxxxx  xxxx  x !  !! !!!!!         !!",
   "                                                                       !      !!",
   "                                                                              !!", 
   "                                                                              !!", 
   "                                                                              !!",
   "      x                                 o oo                                  !!",
   "                                        o oo                                  !!",
   "                                                           o                  !!",
   "                                       x   x   x                              !!",
   "  x                             xxxx   x!!!!!!!x                              !!",
   "                                        x!!!!!x                               !!",
   "               o       ssxxx             x!!!x                  x   =      =  !!",
   "  x                                       xxx        x   x      x  o          !!",
   "  x          xfffx                         x                    x             !!",
   "  x  @         x                           x                    xxxxxx        !!",
   "  xxxxxx       x             xxx           x  xxxx              x        x    !!",
   "    yxy        x                           x                    x     o  x    !!",
   "     x         x      o              o     x           o        x     o  x    !!",
   "     x         x     xxxx          xxxss   x         xxxx     xxx   xxxxxx    !!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                           x                                                                    v        v    !",
   "                           x                                            o                                     !",
   "                           x          xxxx       v         o     v               v       o           v        !",
   "                           x             x                                                                    x",
   "                           xxxxxx     o  xffffffssssfffffffffffssssffffffffffffssssfffffsssssffffffffffffff   x",
   "                           x          o  x     ===     ===                  ===                             ==!",
   "                           x             x                            x                                       !",
   "                           x       xxxxxxx                                                                    !",
   "                           x                        =                                                         !",
   "                           x                                                                                  !",
   "                           x       xxxxxxx                                                                    !",
   "                           x             x                                                                    !",
   "                           x   o         x                                                                    !",
   "                           x   o         x                                                                    !",
   "                           xxxxxxxxxx     x                           v                                       !",
   "                           x         x     x                          v                                       !",
   "                           x          x     xxxxxxxxxx     x          v                                       !",
   "     @                     x           x     x                   xxx  v                                o o    !",
   "    ffff            x      x     x     x      x                       v  x                           o     o  !",
   "               x    x!!!!!!xx o xx     x      x                             xxxx      x             o       o !",
   "!!!!!!!!!!!!!!!x    x!!!!!!xxxxxxx   xx     xxx                                           xx                  !",
   "!!!!!!!!!!!!!!!x    xxxxxxxx                x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxx!",
   "!!!!!!!!!!!!!!!x                           x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!x       o                xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!x                      xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!x!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                    x         x                                   =                                          x",
   "                    x         x                                                                              x",
   "                    x         x              o o               o o                                           x",
   "                    x                                                                                        x",
   "          x         x                       =                                         =                  =   x",
   "          x       o x         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx     o o                         x",
   "       xxxx         x        xx                                                                              x",
   "       xoox         x         x           =                                  =                               x",
   "          x         xxxxvvvv  x           =                                  =                        o      x",
   "          x         x         x           =                                  =                        o      x",
   " o        x o  x    x         x           x      xxxxsssssssssssxxxx    xxxxssssssssssxxxx     xxxsssssssssxxx",
   "          x         x         x           x      x                 x                     x  o  x             x",
   "xxx       x    =    x       o x           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "x         x         x       xxx                          v        v  v          v             v               ",
   "x       xxx      o  x         x                                                               v               ",
   "x         x                   x                     v         v             v      v     v                o   ",
   "x   @     x=                  x                                                                           o   ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxsssssssssssssxxxxxxxxxx  ",
   "                                    xx                                                                        ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                              ",
   "                                o    o                                                                        ",
   "                                                                                                              ",
   "                               o      o                                                                       ",
   "                                o    o                                                                        ",
   "                                 oooo                                                                         ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                    xxxxx  x   x  xxxxx      xxxxx  x    x  xxx     !!                                        ",
   "                      x    x   x  x          x      xx   x  x  x    !!                                        ",
   "                      x    xxxxx  xxxxx      xxxxx  x x  x  x   x   !!                                        ",
   "                      x    x   x  x          x      x  x x  x  x    !!                                        ",
   "                      x    x   x  xxxxx      xxxxx  x   xx  xxx                                               ",
   "                                                                    !!                                        ",
   "                                                                                                              ",
   "                                                                                                              ",
   "     @                                                                                                        ",
   "                                                                                                              ",
   "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
