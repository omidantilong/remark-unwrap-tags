export default {
  type: 'root',
  children: [
    {
      type: 'mdxjsEsm',
      value: '',
      data: {
        estree: {
          type: 'Program',
          sourceType: 'module',
          body: [
            {
              type: 'ExportNamedDeclaration',
              source: null,
              specifiers: [],
              declaration: {
                type: 'FunctionDeclaration',
                id: {
                  type: 'Identifier',
                  name: 'getStaticProps'
                },
                params: [],
                body: {
                  type: 'BlockStatement',
                  body: [
                    {
                      type: 'ReturnStatement',
                      argument: {
                        type: 'ObjectExpression',
                        properties: [
                          {
                            type: 'Property',
                            method: false,
                            shorthand: false,
                            computed: false,
                            kind: 'init',
                            key: {
                              type: 'Literal',
                              value: 'props',
                              raw: '"props"'
                            },
                            value: {
                              type: 'ObjectExpression',
                              properties: [
                                {
                                  type: 'Property',
                                  method: false,
                                  shorthand: false,
                                  computed: false,
                                  kind: 'init',
                                  key: {
                                    type: 'Literal',
                                    value: 'meta',
                                    raw: '"meta"'
                                  },
                                  value: {
                                    type: 'ObjectExpression',
                                    properties: [
                                      {
                                        type: 'Property',
                                        method: false,
                                        shorthand: false,
                                        computed: false,
                                        kind: 'init',
                                        key: {
                                          type: 'Literal',
                                          value: 'title',
                                          raw: '"title"'
                                        },
                                        value: {
                                          type: 'Literal',
                                          value: 'Accessibility',
                                          raw: '"Accessibility"'
                                        }
                                      },
                                      {
                                        type: 'Property',
                                        method: false,
                                        shorthand: false,
                                        computed: false,
                                        kind: 'init',
                                        key: {
                                          type: 'Literal',
                                          value: 'description',
                                          raw: '"description"'
                                        },
                                        value: {
                                          type: 'Literal',
                                          value:
                                            'Guidance, tools and resources on digital accessibility. Get started with accessibility at Co-op.',
                                          raw: '"Guidance, tools and resources on digital accessibility. Get started with accessibility at Co-op."'
                                        }
                                      },
                                      {
                                        type: 'Property',
                                        method: false,
                                        shorthand: false,
                                        computed: false,
                                        kind: 'init',
                                        key: {
                                          type: 'Literal',
                                          value: 'sidebar',
                                          raw: '"sidebar"'
                                        },
                                        value: {
                                          type: 'Literal',
                                          value: true,
                                          raw: 'true'
                                        }
                                      },
                                      {
                                        type: 'Property',
                                        method: false,
                                        shorthand: false,
                                        computed: false,
                                        kind: 'init',
                                        key: {
                                          type: 'Literal',
                                          value: 'hero',
                                          raw: '"hero"'
                                        },
                                        value: {
                                          type: 'Literal',
                                          value: true,
                                          raw: 'true'
                                        }
                                      },
                                      {
                                        type: 'Property',
                                        method: false,
                                        shorthand: false,
                                        computed: false,
                                        kind: 'init',
                                        key: {
                                          type: 'Literal',
                                          value: 'introTextLead',
                                          raw: '"introTextLead"'
                                        },
                                        value: {
                                          type: 'Literal',
                                          value: 'Make it work for everybody',
                                          raw: '"Make it work for everybody"'
                                        }
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                generator: false
              }
            },
            {
              type: 'ExportNamedDeclaration',
              source: null,
              specifiers: [],
              declaration: {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: [
                  {
                    type: 'VariableDeclarator',
                    id: {
                      type: 'Identifier',
                      name: 'meta'
                    },
                    init: {
                      type: 'ObjectExpression',
                      properties: [
                        {
                          type: 'Property',
                          method: false,
                          shorthand: false,
                          computed: false,
                          kind: 'init',
                          key: {
                            type: 'Literal',
                            value: 'title',
                            raw: '"title"'
                          },
                          value: {
                            type: 'Literal',
                            value: 'Accessibility',
                            raw: '"Accessibility"'
                          }
                        },
                        {
                          type: 'Property',
                          method: false,
                          shorthand: false,
                          computed: false,
                          kind: 'init',
                          key: {
                            type: 'Literal',
                            value: 'description',
                            raw: '"description"'
                          },
                          value: {
                            type: 'Literal',
                            value:
                              'Guidance, tools and resources on digital accessibility. Get started with accessibility at Co-op.',
                            raw: '"Guidance, tools and resources on digital accessibility. Get started with accessibility at Co-op."'
                          }
                        },
                        {
                          type: 'Property',
                          method: false,
                          shorthand: false,
                          computed: false,
                          kind: 'init',
                          key: {
                            type: 'Literal',
                            value: 'sidebar',
                            raw: '"sidebar"'
                          },
                          value: {
                            type: 'Literal',
                            value: true,
                            raw: 'true'
                          }
                        },
                        {
                          type: 'Property',
                          method: false,
                          shorthand: false,
                          computed: false,
                          kind: 'init',
                          key: {
                            type: 'Literal',
                            value: 'hero',
                            raw: '"hero"'
                          },
                          value: {
                            type: 'Literal',
                            value: true,
                            raw: 'true'
                          }
                        },
                        {
                          type: 'Property',
                          method: false,
                          shorthand: false,
                          computed: false,
                          kind: 'init',
                          key: {
                            type: 'Literal',
                            value: 'introTextLead',
                            raw: '"introTextLead"'
                          },
                          value: {
                            type: 'Literal',
                            value: 'Make it work for everybody',
                            raw: '"Make it work for everybody"'
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      type: 'yaml',
      value:
        'title: Accessibility\ndescription: Guidance, tools and resources on digital accessibility. Get started with accessibility at Co-op.\nsidebar: true\nhero: true\nintroTextLead: Make it work for everybody',
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0
        },
        end: {
          line: 7,
          column: 4,
          offset: 205
        }
      }
    },
    {
      type: 'mdxjsEsm',
      value: 'import { Signposts } from "components/Signposts";',
      position: {
        start: {
          line: 9,
          column: 1,
          offset: 207
        },
        end: {
          line: 9,
          column: 50,
          offset: 256
        }
      },
      data: {
        estree: {
          type: 'Program',
          start: 207,
          end: 256,
          body: [
            {
              type: 'ImportDeclaration',
              start: 207,
              end: 256,
              specifiers: [
                {
                  type: 'ImportSpecifier',
                  start: 216,
                  end: 225,
                  imported: {
                    type: 'Identifier',
                    start: 256,
                    end: 256,
                    name: 'Signposts',
                    loc: {
                      start: {
                        line: 9,
                        column: 49,
                        offset: 256
                      },
                      end: {
                        line: 9,
                        column: 49,
                        offset: 256
                      }
                    },
                    range: [256, 256]
                  },
                  local: {
                    type: 'Identifier',
                    start: 256,
                    end: 256,
                    name: 'Signposts',
                    loc: {
                      start: {
                        line: 9,
                        column: 49,
                        offset: 256
                      },
                      end: {
                        line: 9,
                        column: 49,
                        offset: 256
                      }
                    },
                    range: [256, 256]
                  },
                  loc: {
                    start: {
                      line: 9,
                      column: 9,
                      offset: 216
                    },
                    end: {
                      line: 9,
                      column: 18,
                      offset: 225
                    }
                  },
                  range: [216, 225]
                }
              ],
              source: {
                type: 'Literal',
                start: 233,
                end: 255,
                value: 'components/Signposts',
                raw: '"components/Signposts"',
                loc: {
                  start: {
                    line: 9,
                    column: 26,
                    offset: 233
                  },
                  end: {
                    line: 9,
                    column: 48,
                    offset: 255
                  }
                },
                range: [233, 255]
              },
              loc: {
                start: {
                  line: 9,
                  column: 0,
                  offset: 207
                },
                end: {
                  line: 9,
                  column: 49,
                  offset: 256
                }
              },
              range: [207, 256]
            }
          ],
          sourceType: 'module',
          comments: [],
          loc: {
            start: {
              line: 9,
              column: 0,
              offset: 207
            },
            end: {
              line: 9,
              column: 49,
              offset: 256
            }
          },
          range: [207, 256]
        }
      }
    },
    {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              value:
                "Having accessible services should not be a question for Co-op, it's what we should and must do.",
              position: {
                start: {
                  line: 11,
                  column: 3,
                  offset: 260
                },
                end: {
                  line: 11,
                  column: 98,
                  offset: 355
                }
              }
            }
          ],
          position: {
            start: {
              line: 11,
              column: 3,
              offset: 260
            },
            end: {
              line: 11,
              column: 98,
              offset: 355
            }
          }
        },
        {
          type: 'mdxJsxFlowElement',
          name: 'cite',
          attributes: [],
          children: [
            {
              type: 'text',
              value: 'Adam Warburton, Chief Product Officer, Co-op.',
              position: {
                start: {
                  line: 13,
                  column: 9,
                  offset: 366
                },
                end: {
                  line: 13,
                  column: 54,
                  offset: 411
                }
              }
            }
          ],
          position: {
            start: {
              line: 13,
              column: 3,
              offset: 360
            },
            end: {
              line: 13,
              column: 61,
              offset: 418
            }
          },
          data: {
            _mdxExplicitJsx: true
          }
        }
      ],
      position: {
        start: {
          line: 11,
          column: 1,
          offset: 258
        },
        end: {
          line: 13,
          column: 61,
          offset: 418
        }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value:
            'If we create products, services or communications that people cannot use or understand, we stop them choosing Co-op.',
          position: {
            start: {
              line: 15,
              column: 1,
              offset: 420
            },
            end: {
              line: 15,
              column: 117,
              offset: 536
            }
          }
        }
      ],
      position: {
        start: {
          line: 15,
          column: 1,
          offset: 420
        },
        end: {
          line: 15,
          column: 117,
          offset: 536
        }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value:
            'This can not only cause stress, anxiety and frustration for people, but it can alienate them.',
          position: {
            start: {
              line: 17,
              column: 1,
              offset: 538
            },
            end: {
              line: 17,
              column: 94,
              offset: 631
            }
          }
        }
      ],
      position: {
        start: {
          line: 17,
          column: 1,
          offset: 538
        },
        end: {
          line: 17,
          column: 94,
          offset: 631
        }
      }
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          value:
            'Accessibility means removing these barriers, or not creating barriers in the first place.',
          position: {
            start: {
              line: 19,
              column: 1,
              offset: 633
            },
            end: {
              line: 19,
              column: 90,
              offset: 722
            }
          }
        }
      ],
      position: {
        start: {
          line: 19,
          column: 1,
          offset: 633
        },
        end: {
          line: 19,
          column: 90,
          offset: 722
        }
      }
    },
    {
      type: 'mdxJsxFlowElement',
      name: 'h3',
      attributes: [],
      children: [
        {
          type: 'text',
          value:
            'Accessibility AccessibilityAccessibilityAccessibilityAccessibility means removing these barriersor not creating barriers in the first place.',
          position: {
            start: {
              line: 22,
              column: 3,
              offset: 731
            },
            end: {
              line: 23,
              column: 47,
              offset: 874
            }
          }
        }
      ],
      position: {
        start: {
          line: 21,
          column: 1,
          offset: 724
        },
        end: {
          line: 24,
          column: 6,
          offset: 880
        }
      },
      data: {
        _mdxExplicitJsx: true
      }
    }
  ],
  position: {
    start: {
      line: 1,
      column: 1,
      offset: 0
    },
    end: {
      line: 25,
      column: 1,
      offset: 881
    }
  }
}
