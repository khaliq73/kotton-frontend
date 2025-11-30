import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const MobileMenu = ({ isOpen, onClose, menuItems }) => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Menu</h2>
                <button onClick={onClose} className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenItem(openItem === item.label ? null : item.label)
                          }
                          className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <span className="font-medium">{item.label}</span>
                          <ChevronRight
                            className={`w-5 h-5 transition-transform ${
                              openItem === item.label ? 'rotate-90' : ''
                            }`}
                          />
                        </button>
                        {openItem === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1"
                          >
                            {item.dropdown.map((subItem) => (
                              <div key={subItem.path}>
                                {subItem.subDropdown ? (
                                  <>
                                    <button
                                      onClick={() =>
                                        setOpenItem(
                                          openItem === `${item.label}-${subItem.label}`
                                            ? item.label
                                            : `${item.label}-${subItem.label}`
                                        )
                                      }
                                      className="w-full flex items-center justify-between py-2 text-gray-600 hover:text-black"
                                    >
                                      <span>{subItem.label}</span>
                                      <ChevronRight
                                        className={`w-4 h-4 transition-transform ${
                                          openItem === `${item.label}-${subItem.label}`
                                            ? 'rotate-90'
                                            : ''
                                        }`}
                                      />
                                    </button>
                                    {openItem === `${item.label}-${subItem.label}` && (
                                      <div className="pl-4">
                                        {subItem.subDropdown.map((subSubItem) => (
                                          <Link
                                            key={subSubItem.path}
                                            to={subSubItem.path}
                                            onClick={onClose}
                                            className="block py-2 text-gray-500 hover:text-black"
                                          >
                                            {subSubItem.label}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <Link
                                    to={subItem.path}
                                    onClick={onClose}
                                    className="block py-2 text-gray-600 hover:text-black"
                                  >
                                    {subItem.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
