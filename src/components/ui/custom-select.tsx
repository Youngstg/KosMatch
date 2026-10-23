"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export interface CustomSelectOption<T extends string = string> {
  value: T;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
}

export interface CustomSelectProps<T extends string = string> {
  id?: string;
  ariaLabel?: string;
  value: T;
  onChange: (value: T) => void;
  options: readonly CustomSelectOption<T>[];
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}

export function CustomSelect<T extends string = string>({
  id,
  ariaLabel,
  value,
  onChange,
  options,
  className,
  placeholder,
  disabled = false,
  size = "sm",
  style,
}: CustomSelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (nextValue: T) => {
    onChange(nextValue);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className={`custom-select-container size-${size} ${isOpen ? "is-open" : ""} ${className ?? ""}`}
      style={style}
    >
      {/* Hidden native select to preserve accessibility and testing compatibility */}
      <select
        id={id}
        aria-label={ariaLabel}
        className="custom-select-native"
        value={value}
        disabled={disabled}
        tabIndex={-1}
        aria-hidden="true"
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Styled interactive trigger button */}
      <button
        type="button"
        className="custom-select-trigger"
        onClick={() => {
          if (!disabled) setIsOpen((prev) => !prev);
        }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <span className="custom-select-trigger-label">
          {selectedOption?.icon && (
            <span className="custom-select-icon" aria-hidden="true">
              {selectedOption.icon}
            </span>
          )}
          <span className="custom-select-text">
            {selectedOption?.label ?? placeholder ?? "Pilih..."}
          </span>
        </span>
        <ChevronDown
          size={14}
          className={`custom-select-chevron ${isOpen ? "is-rotated" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Animated luxury popover listbox */}
      {isOpen && (
        <div className="custom-select-popover" role="listbox">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`custom-select-option ${isSelected ? "is-selected" : ""}`}
                onClick={() => handleSelect(opt.value)}
              >
                <span className="custom-select-option-body">
                  {opt.icon && (
                    <span className="custom-select-icon" aria-hidden="true">
                      {opt.icon}
                    </span>
                  )}
                  <span className="custom-select-option-text">{opt.label}</span>
                  {opt.badge && <span className="custom-select-badge">{opt.badge}</span>}
                </span>
                {isSelected && <Check size={14} className="custom-select-check" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
